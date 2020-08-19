import { inspect } from 'util';
import { Dictionary, EntityMetadata, EntityProperty, AnyEntity, IPrimaryKey, Constructor } from '../typings';
import { Utils } from './Utils';
import { Type } from '../types';

export class ValidationError<T extends AnyEntity = AnyEntity> extends Error {

  constructor(message: string, private readonly entity?: T) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message;
  }

  /**
   * Gets instance of entity that caused this error.
   */
  getEntity(): AnyEntity | undefined {
    return this.entity;
  }

  static fromWrongPropertyType(entity: AnyEntity, property: string, expectedType: string, givenType: string, givenValue: string): ValidationError {
    const entityName = entity.constructor.name;
    const msg = `Trying to set ${entityName}.${property} of type '${expectedType}' to '${givenValue}' of type '${givenType}'`;

    return new ValidationError(msg);
  }

  static fromCollectionNotInitialized(entity: AnyEntity, prop: EntityProperty): ValidationError {
    const entityName = entity.constructor.name;
    const msg = `${entityName}.${prop.name} is not initialized, define it as '${prop.name} = new Collection<${prop.type}>(this);'`;

    return new ValidationError(msg);
  }

  static fromMergeWithoutPK(meta: EntityMetadata): void {
    throw new ValidationError(`You cannot merge entity '${meta.className}' without identifier!`);
  }

  static transactionRequired(): ValidationError {
    return new ValidationError('An open transaction is required for this operation');
  }

  static entityNotManaged(entity: AnyEntity): ValidationError {
    return new ValidationError(`Entity ${entity.constructor.name} is not managed. An entity is managed if its fetched from the database or registered as new through EntityManager.persist()`);
  }

  static notEntity(owner: AnyEntity, prop: EntityProperty, data: any): ValidationError {
    return new ValidationError(`Entity of type ${prop.type} expected for property ${owner.constructor.name}.${prop.name}, ${inspect(data)} of type ${Utils.getObjectType(data)} given. If you are using Object.assign(entity, data), use wrap(entity).assign(data, { em }) instead.`);
  }

  static notVersioned(meta: EntityMetadata): ValidationError {
    return new ValidationError(`Cannot obtain optimistic lock on unversioned entity ${meta.className}`);
  }

  static lockFailed(entityOrName: AnyEntity | string): ValidationError {
    const name = Utils.isString(entityOrName) ? entityOrName : entityOrName.constructor.name;
    const entity = Utils.isString(entityOrName) ? undefined : entityOrName;

    return new ValidationError(`The optimistic lock on entity ${name} failed`, entity);
  }

  static lockFailedVersionMismatch(entity: AnyEntity, expectedLockVersion: number | Date, actualLockVersion: number | Date): ValidationError {
    expectedLockVersion = expectedLockVersion instanceof Date ? expectedLockVersion.getTime() : expectedLockVersion;
    actualLockVersion = actualLockVersion instanceof Date ? actualLockVersion.getTime() : actualLockVersion;

    return new ValidationError(`The optimistic lock failed, version ${expectedLockVersion} was expected, but is actually ${actualLockVersion}`, entity);
  }

  static invalidPropertyName(entityName: string, invalid: string): ValidationError {
    return new ValidationError(`Entity '${entityName}' does not have property '${invalid}'`);
  }

  static invalidType(type: Constructor<Type<any>>, value: any, mode: string): ValidationError {
    const valueType = Utils.getObjectType(value);

    if (value instanceof Date) {
      value = value.toISOString();
    }

    return new ValidationError(`Could not convert ${mode} value '${value}' of type '${valueType}' to type ${type.name}`);
  }

  static cannotModifyInverseCollection(owner: AnyEntity, property: EntityProperty): ValidationError {
    const inverseCollection = `${owner.constructor.name}.${property.name}`;
    const ownerCollection = `${property.type}.${property.mappedBy}`;
    const error = `You cannot modify inverse side of M:N collection ${inverseCollection} when the owning side is not initialized. `
      + `Consider working with the owning side instead (${ownerCollection}).`;

    return new ValidationError(error, owner);
  }

  static invalidCompositeIdentifier(meta: EntityMetadata): ValidationError {
    return new ValidationError(`Composite key required for entity ${meta.className}.`);
  }

  static cannotCommit(): ValidationError {
    return new ValidationError('You cannot call em.flush() from inside lifecycle hook handlers');
  }

  static cannotUseOperatorsInsideEmbeddables(className: string, propName: string, payload: Dictionary): ValidationError {
    return new ValidationError(`Using operators inside embeddables is not allowed, move the operator above. (property: ${className}.${propName}, payload: ${inspect(payload)})`);
  }

}

export class MetadataError<T extends AnyEntity = AnyEntity> extends ValidationError {

  static fromMissingPrimaryKey(meta: EntityMetadata): MetadataError {
    return new MetadataError(`${meta.className} entity is missing @PrimaryKey()`);
  }

  static fromWrongReference(meta: EntityMetadata, prop: EntityProperty, key: keyof EntityProperty, owner?: EntityProperty): MetadataError {
    if (owner) {
      return MetadataError.fromMessage(meta, prop, `has wrong '${key}' reference type: ${owner.type} instead of ${meta.className}`);
    }

    return MetadataError.fromMessage(meta, prop, `has unknown '${key}' reference: ${prop.type}.${prop[key]}`);
  }

  static fromWrongTypeDefinition(meta: EntityMetadata, prop: EntityProperty): MetadataError {
    if (!prop.type) {
      return MetadataError.fromMessage(meta, prop, `is missing type definition`);
    }

    return MetadataError.fromMessage(meta, prop, `has unknown type: ${prop.type}`);
  }

  static fromWrongOwnership(meta: EntityMetadata, prop: EntityProperty, key: keyof EntityProperty): MetadataError {
    const type = key === 'inversedBy' ? 'owning' : 'inverse';
    const other = key === 'inversedBy' ? 'mappedBy' : 'inversedBy';

    return new MetadataError(`Both ${meta.className}.${prop.name} and ${prop.type}.${prop[key]} are defined as ${type} sides, use '${other}' on one of them`);
  }

  static entityNotFound(name: string, path: string): MetadataError {
    return new MetadataError(`Entity '${name}' not found in ${path}`);
  }

  static unknownIndexProperty(meta: EntityMetadata, prop: string, type: string): MetadataError {
    return new MetadataError(`Entity ${meta.className} has wrong ${type} definition: '${prop}' does not exist. You need to use property name, not column name.`);
  }

  static multipleVersionFields(meta: EntityMetadata, fields: string[]): MetadataError {
    return new MetadataError(`Entity ${meta.className} has multiple version properties defined: '${fields.join('\', \'')}'. Only one version property is allowed per entity.`);
  }

  static invalidVersionFieldType(meta: EntityMetadata): MetadataError {
    const prop = meta.properties[meta.versionProperty];
    return new MetadataError(`Version property ${meta.className}.${prop.name} has unsupported type '${prop.type}'. Only 'number' and 'Date' are allowed.`);
  }

  static fromUnknownEntity(className: string, source: string): MetadataError {
    return new MetadataError(`Entity '${className}' was not discovered, please make sure to provide it in 'entities' array when initializing the ORM (used in ${source})`);
  }

  static fromUnknownBaseEntity(meta: EntityMetadata): MetadataError {
    return new MetadataError(`Entity '${meta.className}' extends unknown base entity '${meta.extends}', please make sure to provide it in 'entities' array when initializing the ORM`);
  }

  static noEntityDiscovered(): MetadataError {
    return new MetadataError('No entities were discovered');
  }

  static onlyAbstractEntitiesDiscovered(): MetadataError {
    return new MetadataError('Only abstract entities were discovered, maybe you forgot to use @Entity() decorator?');
  }

  static duplicateEntityDiscovered(paths: string[]): MetadataError {
    return new MetadataError(`Duplicate entity names are not allowed: ${paths.join(', ')}`);
  }

  static multipleDecorators(entityName: string, propertyName: string): MetadataError {
    return new MetadataError(`Multiple property decorators used on '${entityName}.${propertyName}' property`);
  }

  static missingMetadata(entity: string): MetadataError {
    return new MetadataError(`Metadata for entity ${entity} not found`);
  }

  private static fromMessage(meta: EntityMetadata, prop: EntityProperty, message: string): MetadataError {
    return new MetadataError(`${meta.className}.${prop.name} ${message}`);
  }

}

export class NotFoundError<T extends AnyEntity = AnyEntity> extends ValidationError {

  static findOneFailed(name: string, where: Dictionary | IPrimaryKey): NotFoundError {
    return new NotFoundError(`${name} not found (${inspect(where)})`);
  }

}
