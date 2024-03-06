import { Signature, Verification } from '../types/signature.types';

export class SignatureDTO implements Signature {
  email?: string;
  phone?: string;

  constructor(data: { email?: string; phone?: string }) {
    if (data.email && data.phone) {
      throw new Error('Only one of email or phone should be provided');
    }
    if (!data.email && !data.phone) {
      throw new Error('Either email or phone should be provided');
    }

    this.email = data.email;
    this.phone = data.phone;
  }
}

export class VerificationDTO extends SignatureDTO implements Verification {
  signature: string;

  constructor(data: { email?: string; phone?: string; signature: string }) {
    super(data);
    this.signature = data.signature;
  }
}
