import { ApiProperty } from "@nestjs/swagger";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * The application status
 * @example { message: "Wellcome", version: "1.0.0"}
 */
export class Status {
  @ApiProperty()
  message: string;
  @ApiProperty()
  version: string;

  constructor(message, version) {
    message ? this.message = message: null;
    version ? this.version = version: null;
  }
}

export interface testDTO<T> {
  test: T;
}