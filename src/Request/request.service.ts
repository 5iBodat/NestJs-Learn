import { Injectable } from "@nestjs/common";
import { Data } from './interface/req.interface';

@Injectable()
export class RequestService {
    private readonly datas: Data[] = [];

    create(data: Data) {
        this.datas.push(data)
    }

    findAll(): Data[] {
        return this.datas
    }
}