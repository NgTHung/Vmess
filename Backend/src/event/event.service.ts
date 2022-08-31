import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class EventService {
    @WebSocketServer()
    server: Server;
    // @SubscribeMessage('events')
    // handleEvent(
    //     @MessageBody() data: string,
    //     @ConnectedSocket() client: Socket,
    // ): string {
    //     return data;
    // }


}