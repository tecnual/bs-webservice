import { ApiProperty } from "@nestjs/swagger";

/**
 * The application status
 * 
 * @example { message: "Wellcome", version: "1.0.0"}
 * @constructor 
 */
export class Status {
  /** Message */
  @ApiProperty()
  message: string;
  /** Version */
  @ApiProperty()
  version: string;

  /**
   * Constructor
   * @param message Wellcome message 
   * @param version Api version
   */
  constructor(message, version) {
    message ? this.message = message: null;
    version ? this.version = version: null;
  }
}
