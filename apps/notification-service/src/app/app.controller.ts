import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('order-created')
  sendOrderCreatedEmail(@Payload() order: any) {
    console.log('[Notification Service] Sending order created email', order);
  }

  @MessagePattern('payment-succeed')
  sendPaymentSucceedEmail(@Payload() order: any) {
    console.log('[Notification Service] Sending payment succeed email', order);
  }
}
