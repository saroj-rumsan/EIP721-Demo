import { Injectable, NotFoundException } from '@nestjs/common';
import { Signature, Verification } from './types/signature.types';
import { prepareEIP721Data } from './utils/signatureUtils';
import { ethers } from 'ethers';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async signature(signature: Signature) {
    const response = await prepareEIP721Data(signature);
    return response;
  }

  async verification(verification: Verification) {
    const { email, phone, signature } = verification;
    const { domain, types, message } = await prepareEIP721Data({
      email,
      phone,
    });
    const signerAddress = ethers.verifyTypedData(
      domain,
      types,
      message,
      signature,
    );
    if (signerAddress) {
      return this.prisma.user.findUnique({
        where: {
          walletAddress: signerAddress,
        },
      });
    }

    throw new NotFoundException('Invalid Signature');
  }
}
