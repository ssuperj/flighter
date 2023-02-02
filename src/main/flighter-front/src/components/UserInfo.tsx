import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyleWrap = styled.div`
  .container {
    justify-content: center;
    text-align: center;
    width: auto;
    margin-bottom: 30px;

    .title {
      margin-top: 10px;
      font-size: 18px;
      color: var(--color-r-m) ;
      font-family: var(--font-bd);
      opacity: 0.8;
      margin-bottom: 30px;
    }

    .content {

      table {
        margin-bottom: 30px;
        tr {
          height: 30px;
          th {
            text-align: justify;
            width: 100px;
          }
          td {
            input:focus {
              caret-color: var(--color-r-m);
              outline-color: var(--color-r-m);
            }
          }
        }
      }
    }
  }
`;

function UserInfo() {
  return (
    <StyleWrap>
      <div className="container">
        <h1 className="title">USER INFO</h1><br />
        <form className="content">
          <table>
            <tr>
              <th><label>이 &nbsp; 름</label></th>
              <td><input type="text" value={"홍길동"} /></td>
            </tr>
            <tr>
              <th><label>아이디</label></th>
              <td><input type="text" value={"qwe123"} disabled /></td>
            </tr>
            <tr>
              <th><label>비밀번호</label></th>
              <td><input type="password" value={""} /></td>
            </tr>
            <tr>
              <th><label>비밀번호 확인</label></th>
              <td><input type="password" value={""} /></td>
            </tr>
            <tr>
              <th><label>이메일</label></th>
              <td><input type="password" value={""} /></td>
            </tr>
          </table>
          <Button 
            type="submit"
            style={{ backgroundColor: "var(--color-r-m)", border: "none", opacity: "0.8" }}
            href="/flighter-front"
            variant="secondary">
              수정완료
            </Button>
        </form>
      </div>
    </StyleWrap>
  )
}

export default UserInfo;