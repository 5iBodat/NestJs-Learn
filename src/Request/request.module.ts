import { Module } from "@nestjs/common";
import { RequestController } from './request.controller'
import { RequestService } from './request.service'

@Module({
    controllers: [RequestController],
    providers: [RequestService],
    exports: [RequestService]
})

export class RequestModule { }
