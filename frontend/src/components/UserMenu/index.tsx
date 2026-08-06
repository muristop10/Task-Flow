import styled from "styled-components"
import { EmphasisText } from "../EmphasisText"
import type { iUser } from "../../schemas/user.schema"


const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 14px 16px;

  background: var(--surface);

  border: 1px solid var(--border);
  border-radius: 14px;

  box-shadow: var(--shadow);

  transition: all .2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    color: var(--text-primary);
    font-size: .95rem;
  }

  small {
    color: var(--text-secondary);
    font-size: .8rem;
  }
`;

const UserMenu = ({ user }: { user: iUser }) => {
    return (
        <Section>
            <UserInfo>
                <EmphasisText>{user.email}</EmphasisText>
                <h3>{user.name}</h3>
            </UserInfo>
        </Section>
    )
}

export default UserMenu
