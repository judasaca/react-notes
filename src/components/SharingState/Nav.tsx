interface Props {
  cartItems: string[];
}

export default function Nav(props: Props) {
  return <div>Cantidad de items añadidos: {props.cartItems.length}</div>;
}
