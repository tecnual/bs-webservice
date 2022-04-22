import { ApiProperty } from "@nestjs/swagger";
import { DefaultErrorResponse } from "./default-error.response";

export class DefaultResponse<T> {
  @ApiProperty()
  data: T;

  @ApiProperty()
  total: number;
  @ApiProperty({type: DefaultErrorResponse})
  errors: DefaultErrorResponse[];

  public constructor(data: T, total?: number, errors?: DefaultErrorResponse[]) 
  {
    data ? this.data = data : null;
    total ? this.total = total : null;
    errors ? this.errors = errors : (this.errors = []);
  }
}
