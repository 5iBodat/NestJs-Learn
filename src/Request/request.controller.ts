import { Controller, Get, Post, Body } from "@nestjs/common";
import { RequestService } from './request.service';
import { Data } from './interface/req.interface'
import { CreateDataDto } from './dto/create-datas.dto'

@Controller('request')
export class RequestController {
    constructor(private reqService: RequestService) { }

    @Post('createData')
    async create(@Body() createDataDto: CreateDataDto) {
        this.reqService.create(createDataDto)
        return 'Success Insert Data'
    }

    @Get('allData')
    async findAll(): Promise<Data[]> {
        return this.reqService.findAll()
    }
}
