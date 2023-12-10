type Props = {
  row: number;
  placeholder: string;
  name: string;
  defaultValue: string;
};

const ContactTextArea = (props: Props) => {
  const { row, placeholder, name, defaultValue } = props;
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export default ContactTextArea;
