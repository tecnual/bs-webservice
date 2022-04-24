import { ApiProperty } from "@nestjs/swagger";
import { DefaultErrorResponse } from "./default-error.response";
/**
 * Default response
 */
export class DefaultResponse<T> {
  /** Data object */
  @ApiProperty()
  data: T;

  /** Number of total elements in data object */
  @ApiProperty()
  total: number;
  /** Errors */
  @ApiProperty({type: DefaultErrorResponse})
  errors: DefaultErrorResponse[];

  /**
   * Constructor
   * @param data Data object
   * @param total Number of total elements in data object
   * @param errors Errors
   */
  public constructor(data: T, total?: number, errors?: DefaultErrorResponse[]) 
  {
    data ? this.data = data : null;
    total ? this.total = total : null;
    errors ? this.errors = errors : (this.errors = []);
  }
}
