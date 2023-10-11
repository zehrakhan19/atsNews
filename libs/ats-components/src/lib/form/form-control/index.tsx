interface FormControlProps {
  text: string;
}

export function FormControl(props: FormControlProps) {
  return (
    <button>{props.text}</button>
  );
}

export default FormControl;