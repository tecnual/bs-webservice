import { applyDecorators, Type } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";
import { DefaultResponse } from "../../models/responses/default.response.class";

export const ApiCustomDefaultResponse = <T extends Type<unknown>>(dataDto: T, description?, isArray?) =>
  applyDecorators(
    ApiExtraModels(DefaultResponse, dataDto),
    ApiOkResponse({
      description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(DefaultResponse) },
          {
            properties: {
              data: {
                type: isArray? 'array': 'object',
                $ref: isArray? null: getSchemaPath(dataDto),
                items: isArray? {$ref: getSchemaPath(dataDto)}: null
              }
            }
          }
        ]
      }
    })
  )