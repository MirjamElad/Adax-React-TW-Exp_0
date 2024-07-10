import * as React from 'react';

interface FanGroupPickerProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

const FanGroupPicker: React.FC<FanGroupPickerProps> = ({ options, value, onChange }) => {
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };
  return (
    <div className="flex justify-center">
      {options.map((option, index) => (
        <div key={index} className="mr-4">
          <input
            type="radio"
            name="radio-group"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleRadioChange}
            className="mr-4"
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default FanGroupPicker;