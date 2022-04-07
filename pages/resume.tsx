import { Card, Container, Center } from "@mantine/core";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import Roles from "../components/role/roles";
import getRolesById from "../utils/get-roles-by-ids";
import ResumeContext from "../hooks/resume-context";
import ChangeRoleBtn from "../components/role/change-role-btn";
import PdfResumeShell from "../components/resume/pdf-resume-shell";
import ResumeShell from "../components/resume/resume-shell";

export default function Resume() {
  const router = useRouter();
  const { roleId } = router.query;
  let roles = getRolesById(roleId);
  if (roles === undefined || roles[0] === undefined) {
    roles = Roles;
  }

  return (
    <ResumeContext.Provider value={{ roles: roles }}>
      <Container
        fluid={true}
        style={{
          marginBottom: "20vh",
        }}
      >
        <Center>
          <BtnWrapper>
            <ChangeRoleBtn />
          </BtnWrapper>
        </Center>
        <PdfResumeShell />        
        <ResumeShell />
      </Container>
    </ResumeContext.Provider>
  );
}

const BtnWrapper: React.FC<{}> = ({ children }) => {
  return (
    <Card style={{ padding: "0px 10px", marginBottom: "10px" }}>
      {children}
    </Card>
  );
};

Resume.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
