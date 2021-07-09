import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Image,
  Grid,
  Header,
  Container,
  Pagination,
  Icon
} from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import CityList from "../../layouts/CityList";
import SearchBar from "../../layouts/SearchBar";
import "./jobAdvertisement.css";
import { Link } from "react-router-dom";
import JobAdvertisementFavoriteService from "../../services/jobAdvertisementFavoriteService"
import { ToastContainer, toast } from "react-toastify";

export default function JobAdvertisementList() {
  
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize] = useState(4);
  const [favorites, setFavorites] = useState([])

  let jobAdvertisementService = new JobAdvertisementService();
  let jobAdvertisementFavoriteService = new JobAdvertisementFavoriteService();
  useEffect(() => {
    jobAdvertisementService
      .getAllSorted(pageNo, pageSize)
      .then((response) => setJobAdvertisements(response.data.data))

    jobAdvertisementFavoriteService.getByUserId(1).then((response)=>setFavorites(response.data.data))
  }, [pageNo,pageSize]);

  function handlePaginationChange(page) {
    setPageNo(page);
  };

  function handleFavoriteStatus(userId,jobAdvertisementId){
    let jobAdvertisementFavorite = {
      jobAdvertisement:{
        id:jobAdvertisementId
      },
      jobSeeker:{
        id:userId
      }
    }
    jobAdvertisementFavoriteService.add(jobAdvertisementFavorite).then(toast.success("Favorilere eklendi."))
  }

  function handleFavoriteStatusFalse(userId,jobAdvertisementId){
    jobAdvertisementFavoriteService.delete(userId,jobAdvertisementId).then(toast.success("Favorilerden çıkartıldı."))
  }

  function checkFavoriteJobAdvertisement(jobAdvertisementId){
    for (let i = 0; i < favorites.length; i++) {
      if(favorites[i].jobAdvertisement?.id === jobAdvertisementId){
        return true;
      }
    }
    return false;
  }

  return (
    <div >
        <h3 className="searchHeader">İş poziyonu veya iş ara</h3>
      <Container className="main">
        <SearchBar />
        <Header textAlign="center">
          <h1 className="jobAdvertisementHeader">İŞ İLANLARI</h1>
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <CityList />
            </Grid.Column>
            <Grid.Column width={12}>
              {jobAdvertisements.map((jobAdvertisement) => (
                <Card.Group>
                  <Card
                    className="CardsJobAdvertisement"
                    raised
                    style={{ width: "90em" }}
                  >
                    <Card.Content>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={2}>
                            <Image
                              floated="left"
                              style={{ marginTop: "15px" }}
                              size="small"
                              src="https://images.squarespace-cdn.com/content/5a731e85f6576e32b715abc8/1579896824767-9MU5NQSUV2QV9IFT0VO6/Screen+Shot+2020-01-24+at+3.13.03+PM.png?content-type=image%2Fpng"
                            />
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <div style={{ marginLeft: "1em",marginTop:"-2em" }}>
                              <Card.Header>
                                <h3 className="jobadvertisementtitle">
                                  {jobAdvertisement.title}
                                </h3>
                              </Card.Header>
                              <Card.Meta>
                                {jobAdvertisement.city.cityName}
                              </Card.Meta>
                              <Card.Description textAlign="center">
                                {jobAdvertisement.employer.companyName}
                              </Card.Description>
                            </div>
                          </Grid.Column>
                          <Grid.Column width={2}>
                            {checkFavoriteJobAdvertisement(jobAdvertisement.id)===true ? (
                              <Icon name="like" color="red" onClick={()=>handleFavoriteStatusFalse(1,jobAdvertisement.id)}></Icon>) :
                              (<Icon name="like" onClick={()=>handleFavoriteStatus(1,jobAdvertisement.id)}></Icon>
                              )}
                            <Card.Meta style={{ marginTop: "13px" }}>
                              {jobAdvertisement.lastDate}
                            </Card.Meta>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="blue">
                          Başvur
                        </Button>
                        <Button as={Link}
                            to={`/jobadvertisement/detail/${jobAdvertisement.id}`} className="detailButton" color="blue">
                         
                            İş İlanına Git
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Card.Group>
              ))}
              <Pagination
                className="jobAdvertisementPagination"
                defaultActivePage={pageNo}
                onPageChange={(e,data)=>{
                  handlePaginationChange(data.activePage)
                }}
                pointing
                secondary
                circle="true"
                totalPages={2}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
