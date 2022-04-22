import { ApiProperty } from "@nestjs/swagger";

export class DefaultErrorResponse {
    @ApiProperty()
    code: string;
    @ApiProperty()
    message: string;

    constructor(code, message) {
        code? this.code = code: null;
        message? this.message = message: null;
    }
}