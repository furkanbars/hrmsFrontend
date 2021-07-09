import React, { useEffect, useState } from "react";
import EmployerService from "../services/employerService";
import {
  Button,
  Icon,
  Table,
  Container,
  Header,
  Modal,
} from "semantic-ui-react";
import { toast } from "react-toastify";

export default function EmployerNotConfirm() {

  const [open, setOpen] = React.useState(false);
  const [openDelete, setDeleteOpen] = React.useState(false);
  const [employers, setEmployers] = useState([]);

  let employerService = new EmployerService();

  useEffect(() => {
    employerService.getAllNotConfirm().then((response) => setEmployers(response.data.data))
  }, []);

  const confirmStatusTrue = (id) => {
    employerService.updateConfirmStatus(id).then(setOpen(false)).then(toast.success("Hesap onaylandı.")).then(window.location.reload());
  };

  const isActiveFalse = (id) => {
    employerService.updateisactive(id).then(setDeleteOpen(false)).then(toast.success("İş veren hesabı onlanmadı ve pasif hale getirildi.")).then(window.location.reload());
  };

  return (
    <div>
      <div className="jobAdWaitingConfirmDiv">
        <Container className="jobAdWaitingConfirmContainer">
          <Header className="jobAdWaitingConfirmHeader">
            <h1>Onaylanmayı bekleyen iş verenler</h1>
          </Header>
          <div className="jobAdWaitingConfirmTable">
            <Table compact celled definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                  <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                  <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {employers.map((employer) => (
                  <Table.Row>
                    <Table.Cell>
                      <Modal
                        basic
                        size="tiny"
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button color="green">Onayla</Button>}
                      >
                        <Header icon>
                          <Icon name="archive" />
                          Onaylanmamış hesap
                        </Header>
                        <Modal.Content>
                          <p>
                            Bu hesap onaylanmadığı için henüz aktif değil.
                            Onaylandığı takdirde aktif hale alınmış olucak.
                            Onaylamak istediğinizden emin misiniz?
                          </p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button
                            onClick={() => setOpen(false)}
                            basic
                            color="red"
                            inverted
                          >
                            <Icon name="remove" /> Hayır
                          </Button>
                          <Button
                            onClick={() => confirmStatusTrue(employer.id)}
                            color="green"
                            inverted
                          >
                            <Icon name="checkmark" /> Evet
                          </Button>
                        </Modal.Actions>
                      </Modal>
                    </Table.Cell>
                    <Table.Cell>
                      <Modal
                        basic
                        size="tiny"
                        onClose={() => setDeleteOpen(false)}
                        onOpen={() => setDeleteOpen(true)}
                        open={openDelete}
                        trigger={
                          <Button style={{ marginLeft: "2em" }} color="red">
                            Sil
                          </Button>
                        }
                      >
                        <Header icon>
                          <Icon name="archive" />
                          Onaylanmamış hesap
                        </Header>
                        <Modal.Content>
                          <p>
                            Bu hesap onaylanmadığı için henüz aktif değil.
                            Onaylanmadığı taktirde asla aktif olamayacak. Silmek
                            istediğinizden emin misiniz?
                          </p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button
                            onClick={() => setDeleteOpen(false)}
                            basic
                            color="red"
                            inverted
                          >
                            <Icon name="remove" /> Çık
                          </Button>
                          <Button
                            onClick={() => isActiveFalse(employer.id)}
                            color="green"
                            inverted
                          >
                            <Icon name="checkmark" /> Sil
                          </Button>
                        </Modal.Actions>
                      </Modal>
                    </Table.Cell>
                    <Table.Cell>{employer.companyName}</Table.Cell>
                    <Table.Cell>{employer.webSite}</Table.Cell>
                    <Table.Cell>{employer.email}</Table.Cell>
                    <Table.Cell>{employer.phoneNumber}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
}
