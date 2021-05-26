import { Injectable } from '@nestjs/common';
import { Client } from './client';

@Injectable()
export class ClientsService {
    clients: Client[] = [
        { id: 1, name: 'Diego Lima', email: 'lima@email.com', password: 'senha123' },
        { id: 2, name: 'Maria Lima', email: 'maria@email.com', password: 'senha321' },
        
    ];

    getAll() {
        return this.clients;
    }

    getById(id: number) {
        const client = this.clients.find((value) => value.id == id);
        return client;
    }

    create(client: Client) {
        let lastId = 0;
        if (this.clients.length > 0) {
            lastId = this.clients[this.clients.length - 1].id
        }

        client.id = lastId + 1;
        this.clients.push(client);

        return client;
    }

    update(client: Client) {
        const clientArray = this.getById(client.id);
        if (clientArray) {
            clientArray.name = client.name;
            clientArray.email = client.email;
            clientArray.password = client.password;
        }
        return clientArray;
    }

    delete(id: number) {
        const index = this.clients.findIndex((value) => value.id == id);
        this.clients.splice(index, 1);
    }
}
