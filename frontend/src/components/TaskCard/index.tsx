import styled from "styled-components";
import type { iTask } from '../../types/tasks';

export const TaskContainer = styled.div`
  background: var(--surface);

  border: 1px solid var(--border);
  border-radius: 20px;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  transition: all 0.3s ease;
  cursor: pointer;

  box-shadow: var(--shadow);

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary);
  }
`;

export const TaskStatus = styled.span<{ status: string }>`
  width: fit-content;

  padding: 0.45rem 0.85rem;
  border-radius: 999px;

  font-size: 0.8rem;
  font-weight: 600;

  text-transform: capitalize;

  ${({ status }) => {
    switch (status) {
      case "done":
        return `
          background: rgba(34, 197, 94, 0.15);
          color: var(--success);
        `;

      case "in-progress":
        return `
          background: rgba(245, 158, 11, 0.15);
          color: var(--warning);
        `;

      case "todo":
      default:
        return `
          background: rgba(107, 114, 128, 0.15);
          color: var(--text-secondary);
        `;
    }
  }}
`;

export const TaskID = styled.span`
  width: fit-content;

  font-size: 0.75rem;
  font-weight: 600;

  color: var(--primary);
  background: rgba(99, 102, 241, 0.15);

  padding: 0.3rem 0.7rem;
  border-radius: 999px;
`;


export const TaskTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);

  line-height: 1.2;
`;

export const TaskDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;

  color: var(--text-secondary);

  flex: 1;
`;

export const TaskOwner = styled.span`
  width: fit-content;

  margin-top: auto;

  font-size: 0.85rem;
  font-weight: 600;

  color: var(--text-primary);
  background: var(--background);

  border: 1px solid var(--border);

  padding: 0.5rem 0.8rem;
  border-radius: 10px;
`;

interface TaskCardProps {
    task: iTask
}

const TaskCard = ({
    task
}: TaskCardProps) => {
    return (
        <TaskContainer>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskID>{task.id}</TaskID>
            <TaskDescription>{task.description}</TaskDescription>
            <TaskOwner>{task.projectId}</TaskOwner>
            <TaskStatus status={task.status}>{task.status}</TaskStatus>
        </TaskContainer>
    )
}

export default TaskCard
