const InputSimple = ({ name, value, handleChange }: { name: string; value: string; handleChange: any }) => {
	return (
		<label htmlFor={name} className="block border border-black p-2" data-cy={`label_${name}`}>
			<span data-cy={`title_${name}`}>{name}:</span>
			<input
				type="text"
				className="border border-black"
				name={name}
				value={value}
				onChange={handleChange}
				data-cy={`input_${name}`}
			/>
		</label>
	);
};

export default InputSimple;
