import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { Client } from './shared/client';
import { ClientsService } from './shared/clients.service';

@Controller('clients')
export class ClientsController {

    constructor(
        private ClientsService: ClientsService
    ) { }

    @Get()
    async getAll(): Promise<Client[]> {
        return this.ClientsService.getAll();
    }
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Client> {
        return this.ClientsService.getById(id);
    }

    @Post()
    async create(@Body() client: Client ): Promise<Client>{
        return this.ClientsService.create(client);
    }
    
    @Put(':id')
    async update(@Param() id: number, @Body() client: Client ): Promise<Client>{
        client.id = id;   
        return this.ClientsService.create(client);
    }
    
    @Delete(':id')
    async delete(@Param() id: number){
        this.ClientsService.delete(id);
    }
}    
