import {Entity, model, property} from '@loopback/repository';

@model()
export class Incident extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  incidentId: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'date',
    required: true,
  })
  timestamp: string;

  constructor(data?: Partial<Incident>) {
    super(data);
  }
}
