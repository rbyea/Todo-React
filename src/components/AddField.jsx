import React from 'react';
import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slice/taskSlice'



export const AddField = ({ setInput, input,setCheck , check}) => {

  const [disabled, setDisabled] = React.useState(false);
  const dispatch = useDispatch();

  const btnAdd = () => {
    dispatch(addTask({input, check}))
    setInput('')
  }

  React.useEffect(() => {
    input.length >= 1 ? setDisabled(false) : setDisabled(true)
  }, [input])

  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <TextField  onChange={(e) => setInput(e.target.value)} value={input} placeholder="Введите текст задачи..." variant="standard" fullWidth />
      <Button disabled={disabled} onClick={() => btnAdd()}>
        <AddIcon />
      </Button>
    </div>
  );
};
