import React, { useState } from 'react';
import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import "./Main.css"
import Fitness from './Fitness';


const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  padding-left: 5px;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right:50px;


`;




const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);

  const addTask = () => {
    const taskName = prompt("Enter task name:");
    if (taskName) {
      setTasks([...tasks, taskName]);
    }
  };

  const addMember = () => {
    const memberName = prompt("Enter member name:");
    if (memberName) {
      setMembers([...members, memberName]);
    }
  };

  return (
    <div>
       < Fitness/>
    
    <Container>
      <Section>
        <Title>

          <div>        
            <br/>
            <Button className='addtask' onClick={addTask}>Add Task</Button>

            <AddIcon  className='addicon'/>
            {/* < AddIcon  className='add'/> */}

          </div>
        </Title>
        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem key={index}>
              {task}
              <div>
                <ExpandLessIcon />
                <ExpandMoreIcon />
              </div>
            </TaskItem>
          ))}
        </TaskList>
      </Section>

      <Section>
        <Title>
          <div>
          {/* < AddIcon  className='add'/> */}
            <Button className='addmember' onClick={addMember}>Add website as task</Button>
            < AddIcon  className='add'/>
        

          </div>
        </Title>
        <TaskList>
          {members.map((member, index) => (
            <TaskItem key={index}>
              {member}
              <MessageIcon />
            </TaskItem>
          ))}
        </TaskList>
      </Section>
    </Container>
</div>
  );
};

export default MainPage;
