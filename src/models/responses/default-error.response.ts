import { ApiProperty } from "@nestjs/swagger";

/**
 * Default Error Response
 */
export class DefaultErrorResponse {
    /** Error code */
    @ApiProperty()
    code: string;
    /** Error description */
    @ApiProperty()
    message: string;

    /**
     * constructor
     * @param code Error code
     * @param message Error description
     */
    constructor(code, message) {
        code? this.code = code: null;
        message? this.message = message: null;
    }
}