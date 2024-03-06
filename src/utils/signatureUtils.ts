export function prepareEIP721Data(data: {
  email?: string;
  phone?: string;
}): any {
  // Define the domain separator
  const domain = {
    name: 'YourDApp',
    version: '1.0.0',
    chainId: 80001,
  };

  // Define the type definitions
  const types = {
    Signature: [
      { name: 'email', type: 'string' },
      { name: 'phone', type: 'string' },
    ],
  };

  // Define the data to be signed
  const value = {
    email: data.email ? data.email : '',
    phone: data.phone ? data.phone : '',
  };

  // Define the typed data according to the EIP-721 specification
  const typedData = {
    types: types,
    domain: domain,
    primaryType: 'Signature',
    message: value,
  };

  return typedData;
}
