import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Incident} from '../models';
import {IncidentRepository} from '../repositories';

export class IncidentController {
  constructor(
    @repository(IncidentRepository)
    public incidentRepository : IncidentRepository,
  ) {}

  @post('/incidents', {
    responses: {
      '200': {
        description: 'Incident model instance',
        content: {'application/json': {schema: {'x-ts-type': Incident}}},
      },
    },
  })
  async create(@requestBody() incident: Incident): Promise<Incident> {
    return await this.incidentRepository.create(incident);
  }

  @get('/incidents/count', {
    responses: {
      '200': {
        description: 'Incident model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Incident)) where?: Where,
  ): Promise<Count> {
    return await this.incidentRepository.count(where);
  }

  @get('/incidents', {
    responses: {
      '200': {
        description: 'Array of Incident model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Incident}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Incident)) filter?: Filter,
  ): Promise<Incident[]> {
    return await this.incidentRepository.find(filter);
  }

  @patch('/incidents', {
    responses: {
      '200': {
        description: 'Incident PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() incident: Incident,
    @param.query.object('where', getWhereSchemaFor(Incident)) where?: Where,
  ): Promise<Count> {
    return await this.incidentRepository.updateAll(incident, where);
  }

  @get('/incidents/{id}', {
    responses: {
      '200': {
        description: 'Incident model instance',
        content: {'application/json': {schema: {'x-ts-type': Incident}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Incident> {
    return await this.incidentRepository.findById(id);
  }

  @patch('/incidents/{id}', {
    responses: {
      '204': {
        description: 'Incident PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() incident: Incident,
  ): Promise<void> {
    await this.incidentRepository.updateById(id, incident);
  }

  @put('/incidents/{id}', {
    responses: {
      '204': {
        description: 'Incident PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() incident: Incident,
  ): Promise<void> {
    await this.incidentRepository.replaceById(id, incident);
  }

  @del('/incidents/{id}', {
    responses: {
      '204': {
        description: 'Incident DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.incidentRepository.deleteById(id);
  }
}
