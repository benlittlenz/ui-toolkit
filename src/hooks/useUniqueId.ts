import { customAlphabet } from 'nanoid';
import { useState } from 'react';

const nanoId = customAlphabet('123456789abcdefghijklmnop', 10);

export const useUniqueId = (): string => {
  const [id] = useState(nanoId);

  return id;
};
