import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './monogo-ds.datasource.json';

export class MonogoDSDataSource extends juggler.DataSource {
  static dataSourceName = 'MonogoDS';

  constructor(
    @inject('datasources.config.MonogoDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
