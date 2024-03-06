export type Signature = {
  email?: string;
  phone?: string;
};

export type Verification = {
  signature: string;
} & Signature;
