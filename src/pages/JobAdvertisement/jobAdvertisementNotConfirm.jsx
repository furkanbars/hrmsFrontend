import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Icon,
  Table,
  Container,
  Header,
  Modal,
} from "semantic-ui-react";
import "./jobAdvertisement.css";
import JobAdvertisementService from "../../services/jobAdvertisementService.js";
import { ToastContainer, toast } from "react-toastify";

export default function JobAdvertisementNotConfirm() {
  const [open, setOpen] = React.useState(false);

  const [openDelete, setDeleteOpen] = React.useState(false);

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  const jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    jobAdvertisementService.getAllNotComfirmed().then((response) => {
      setJobAdvertisements(response.data.data);
    });
  }, []);

  const confirmStatusTrue = (id) => {
    jobAdvertisementService
      .updateConfirmStatus(id)
      .then(setOpen(false))
      .then(toast.success("İş ilanı onaylandı."))
      .then(window.location.reload());
  };

  const isActiveFalse = (id) => {
    jobAdvertisementService
      .updateIsActive(id)
      .then(setDeleteOpen(false))
      .then(toast.success("İş ilanın yayınlanmasına izin verilmedi."))
      .then(window.location.reload());
  };

  return (
    <div>
      <div className="jobAdWaitingConfirmDiv">
        <Container className="jobAdWaitingConfirmContainer">
          <Header className="jobAdWaitingConfirmHeader">
            <h1>Onaylanmayı bekleyen iş ilanları</h1>
          </Header>
          <div className="jobAdWaitingConfirmTable">
            <Table compact celled definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                  <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                  <Table.HeaderCell>Başlık</Table.HeaderCell>
                  <Table.HeaderCell>İş Adı</Table.HeaderCell>
                  <Table.HeaderCell>Şehir</Table.HeaderCell>
                  <Table.HeaderCell>Minimum maaş</Table.HeaderCell>
                  <Table.HeaderCell>Maximum maaş</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {jobAdvertisements.map((jobAdvertisement) => (
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
                          Onaylanmamış İlan
                        </Header>
                        <Modal.Content>
                          <p>
                            Bu ilan onaylanmadığı için henüz yayında değil.
                            Onaylandığı takdirde yayına alınacak. Onaylamak
                            istediğinizden emin misiniz?
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
                            onClick={(e) =>
                              confirmStatusTrue(jobAdvertisement.id)
                            }
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
                          Onaylanmamış İlan
                        </Header>
                        <Modal.Content>
                          <p>
                            Bu ilan onaylanmadığı için henüz yayında değil.
                            Onaylanmadığı taktirde asla yayına alınmayacak.
                            Silmek istediğinizden emin misiniz?
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
                            onClick={() => isActiveFalse(jobAdvertisement.id)}
                            color="green"
                            inverted
                          >
                            <Icon name="checkmark" /> Sil
                          </Button>
                        </Modal.Actions>
                      </Modal>
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.employer.companyName}
                    </Table.Cell>
                    <Table.Cell>{jobAdvertisement.title}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.job.name}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                    <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
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
