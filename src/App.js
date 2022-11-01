import React from 'react';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';
import { useSelector, useDispatch } from 'react-redux';
import { tooglerCompleted, clearTasks } from './redux/slice/taskSlice';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tasks);

  const [input, setInput] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [toogler, setToogler] = React.useState(true);
  const [tab, setTab] = React.useState(0);

  const btnCompleted = () => {
    dispatch(tooglerCompleted(toogler));
    setToogler(!toogler);
  };

  const btnClear = () => {
    dispatch(clearTasks());
    setToogler(true);
  };

  const tabs = (e) => {
    setTab(e);
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField setCheck={setCheck} check={check} setInput={setInput} input={input} />
        <Divider />
        <Tabs value={tab}>
          <Tab onClick={() => tabs(0)} label="Все" />
          <Tab onClick={() => tabs(1)} label="Активные" />
          <Tab onClick={() => tabs(2)} label="Завершённые" />
        </Tabs>
        <Divider />

        <List className="lists">
          {state &&
            state.map((obj, index) => (
              <Item
                index={index}
                tab={tab}
                key={obj.id}
                element={obj.id}
                completed={obj.completed}
                text={obj.text}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={state.length > 2 ? false : true} onClick={btnCompleted}>
            {toogler ? 'Отметить всё' : 'Снять отметки'}
          </Button>
          <Button disabled={state.length > 1 ? false : true} onClick={btnClear}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
