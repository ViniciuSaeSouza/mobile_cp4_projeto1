export type Usuario = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export type FieldType = {
    label: string;
    value: string;
}
