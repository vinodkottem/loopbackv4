import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Incident} from '../models';
import {MonogoDSDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IncidentRepository extends DefaultCrudRepository<
  Incident,
  typeof Incident.prototype.incidentId
> {
  constructor(
    @inject('datasources.MonogoDS') dataSource: MonogoDSDataSource,
  ) {
    super(Incident, dataSource);
  }
}
