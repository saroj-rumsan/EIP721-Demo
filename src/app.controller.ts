import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SignatureDTO, VerificationDTO } from './dtos/signature.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('signature')
  signature(@Body() signatureDTO: SignatureDTO) {
    return this.appService.signature(signatureDTO);
  }

  @Post('verification')
  verification(@Body() verificationDTO: VerificationDTO) {
    return this.appService.verification(verificationDTO);
  }
}
