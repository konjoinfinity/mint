import React, { useEffect, useState, Suspense } from "react";
import { Button, Container, Row, Col, Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Contract from "web3-eth-contract";
import Web3 from "web3";
import { ethers } from "ethers";
import "./Load.css"

const { ethereum } = window;
Contract.setProvider(ethereum);
let web3 = new Web3(ethereum);
let provider = {};
if (window.ethereum && window.ethereum.isMetaMask) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
}

let txreceipt = "";

export default function PageHeader() {
  const [visible, setVisible] = useState(true);
  const [showLoader, setshowLoader] = useState(false);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNFT, setClaimingNFT] = useState(false);
  const [show2Dmint, setShow2Dmint] = useState(true);
  const [showPixelmint, setShowPixelmint] = useState(true);
  const [feedback, setFeedback] = useState(
    `Click to mint your Beauty Baebee NFT`
  );
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const onDismiss = () => setVisible(false);
  const onTrigger = () => setVisible(true);

  const addNftToWal = async (contract, nftsym, png) => {
    try {
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: contract,
            symbol: nftsym,
            decimals: 0,
          image: `https://mint.reautydao.io/static/media/${png}.png`,
          //https://mint.reautydao.io/static/media/toxicbb.png
          //https://mint.reautydao.io/static/media/toxicbbpix.png
          },
        },
      });
      if (wasAdded) {
        setFeedback("NFT was imported to your wallet! View it on ");
      } else {
        setFeedback("NFT was not imported.");
      }
    } catch (error) {
      setFeedback(String(error));
    }
  };

  const claimNFTs = async (a) => {
    let cost = 0;
    let contractAddress = "";
    let nftSymbol = "";
    let nftimg = ""
    // eslint-disable-next-line
    if (a == true) {
      cost = 50000000000000000000;
      contractAddress = "0x527F243B04fcaDaA6f6244F65d451bDeA8cBFa92";
      nftSymbol = "TOXBAEBEEPIX"
      nftimg = "toxicbbpix"
    } else {
      cost = CONFIG.WEI_COST;
      contractAddress = CONFIG.CONTRACT_ADDRESS;
      nftSymbol = "TXBAEBEE"
      nftimg = "toxicbb"
    }
    let totalCostWei = String(cost * mintAmount);
    setClaimingNFT(true);
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    var contract = new Contract(abi, CONFIG.CONTRACT_ADDRESS);
    setFeedback(`Minting your NFT...`);
    try {
      await web3.eth
        .sendTransaction({
          from: blockchain.account,
          to: contractAddress,
          data: contract.methods.mint(mintAmount).encodeABI(),
          maxPriorityFeePerGas: null,
          maxFeePerGas: null, 
          value: totalCostWei
        })
        .once("error", (err) => {
          if (visible === false) {
            onTrigger();
          }
          setFeedback(err.message);
          setClaimingNFT(false);
          setshowLoader(false);
        })
        .then((receipt) => {
          txreceipt = "data";
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it ==> `
          );
          setClaimingNFT(false);
          setshowLoader(false);
          dispatch(fetchData(blockchain.account));
          addNftToWal(contractAddress, nftSymbol, nftimg);
        });
    } catch (err) {
      setFeedback(`${err}`);
    }
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = async () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      setFeedback("Wallet connected, click 'MINT' to mint an NFT.");
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain.account]);

  return (
    <div>
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h1 style={{marginTop: "5vh"}} className="h1-seo">TOXIC BAEBEE NFTS</h1>
                  {/* eslint-disable-next-line */}
                  {showPixelmint == true ? (
                  <p className="text-white mb-1"
                    style={{ textAlign: "center" }}>
                    The beauty industry lacks transparency and regulation.
                    Beauty consumers are frustrated with misleading information
                    And exaggerated marketing claims.
                    <br />
                    <br />
                    This deceptive industry which idolizes the "Skinny And
                    Beauty Culture," leads many customers to obtain unnecessary
                    plastic surgery, unhealthy eating habits, and unknowingly
                    use beauty products with toxic ingredients.
                    <br />
                    <br />
                    The "Toxic Baebee" NFT Series was designed to generate
                    public awareness by illustrating the "Toxic Side Of Beauty."
                  </p>
                  ):("")}
                </div>
                {/* eslint-disable-next-line */}
                {show2Dmint == true ? (
                  <div>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                      <>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          The sale has ended.
                        </p>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          You can still find {CONFIG.NFT_NAME} on
                        </p>
                        <br />
                        <a rel={"nofollow"} href={CONFIG.MARKETPLACE_LINK}>
                          {CONFIG.MARKETPLACE}
                        </a>
                      </>
                    ) : (
                      <>
                        <br />
                        <br />
                        {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <Alert
                                  color="info"
                                  isOpen={visible}
                                  toggle={onDismiss}
                                >
                                  {blockchain.errorMsg}
                                </Alert>
                              </>
                            ) : null}
                            {showLoader ? 
                              <div className="cirbox">
                              <div className="cirloader">
                                <svg className="circircular" viewBox="25 25 50 50">
                                  <circle className="cirpath" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
                                </svg>
                              </div>
                            </div>
                              : ""}
                            <br />
                            <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              onClick={(e) => {
                                e.preventDefault();
                                setshowLoader(true)
                                dispatch(connect(false));
                                getData();
                                setShowPixelmint(false);
                                if (visible === false) {
                                  onTrigger();
                                }
                              }}
                            >
                              Connect Your Wallet
                            </Button>
                          </div>
                        ) : (
                          <>
                            {feedback !==
                            `Click to mint your Beauty Baebee NFT` ? (
                              <Alert
                                color="info"
                                isOpen={visible}
                                toggle={onDismiss}
                              >
                                {feedback}
                                {txreceipt !== "" ? (<a href={"https://opensea.io/collection/toxic-baebee-nft-series"} rel="nofollow">Opensea</a>) : ("")}
                              </Alert>
                            ) : (
                              ""
                            )}
                            
                            <br />
                            {claimingNFT ? 
                              <div className="cirbox">
                              <div className="cirloader">
                                <svg className="circircular" viewBox="25 25 50 50">
                                  <circle className="cirpath" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
                                </svg>
                              </div>
                            </div>
                              : ""}
                            {/* eslint-disable-next-line */}
                            <div
                              style={{
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                flexDirection: "row",
                                display: "flex",
                    
                              }}
                            >
                              <Button
                                color="info"
                                style={{ padding: "1.5em" }}
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                <RemoveIcon />
                              </Button>
                              <p
                                style={{
                                  textAlign: "center",
                                  color: "primary",
                                  fontSize: "25px",
                                }}
                              >
                                {mintAmount}
                              </p>
                              <Button
                                color="info"
                                style={{ padding: "1.5em" }}
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                <AddIcon />
                              </Button>
                            </div>
                            <br />
                            <div
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                display: "flex",
                              }}
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setshowLoader(true)
                                  claimNFTs(false);
                                  getData();
                                  setFeedback("Approve transaction to mint");
                                  if (visible === false) {
                                    onTrigger();
                                  }
                                }}
                              >
                                {claimingNFT
                                  ? "MINTING..."
                                  : `MINT - ${25 * mintAmount} MATIC`}
                              </Button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Col lg="4" md="5">
                <img
                  style={{ maxHeight: "30vh", maxWidth: "30vh" }}
                  alt={"toxic baebees"}
                  src={require("./example.gif")}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <div className="section section-signup">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    className="display-3 text-white"
                    style={{ textAlign: "center" }}
                  >
                    PIXELATED TOXIC BAEBEE NFTS
                  </h3>
                  {/* eslint-disable-next-line */}
                  {show2Dmint == true ? (
                  <p className="text-white mb-3"
                    style={{ textAlign: "center" }}>
                    We're so excited to introduce our new pixelated Toxic Baebee
                    NFT series - Limited to 1000 total NFTs, The Pixelated
                    variation better illustrates the beauty industry's lack of
                    transparency, and it's filled with misleading marketing
                    claims, unrealistic expectations, and harmful ingredients
                    that risk our health. This NFT series aims to raise
                    awareness of "Toxic Side of Beauty."
                  </p>
                  ):("")}
                </div>
                {/* eslint-disable-next-line */}
                {showPixelmint == true ? (
                  <div>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                      <>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          The sale has ended.
                        </p>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          You can still find {CONFIG.NFT_NAME} on
                        </p>
                        <br />
                        <a rel={"nofollow"} href={CONFIG.MARKETPLACE_LINK}>
                          {CONFIG.MARKETPLACE}
                        </a>
                      </>
                    ) : (
                      <>
                        <br />
                        <br />
                        {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <Alert
                                  color="info"
                                  isOpen={visible}
                                  toggle={onDismiss}
                                >
                                  {blockchain.errorMsg}
                                </Alert>
                              </>
                            ) : null}
                            <br />
                            {showLoader ? 
                              <div className="cirbox">
                              <div className="cirloader">
                                <svg className="circircular" viewBox="25 25 50 50">
                                  <circle className="cirpath" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
                                </svg>
                              </div>
                            </div>
                              : ""}
                            <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect(true));
                                getData();
                                setShow2Dmint(false);
                                if (visible === false) {
                                  onTrigger();
                                }
                              }}
                            >
                              Connect Your Wallet
                            </Button>
                          </div>
                        ) : (
                          <>
                            {feedback !==
                            `Click to mint your Beauty Baebee NFT` ? (
                              <Alert
                                color="info"
                                isOpen={visible}
                                toggle={onDismiss}
                              >
                                {feedback}
                                {txreceipt !== "" ? (<a href={"https://opensea.io/collection/toxic-baebee-pixelated"} rel="nofollow">Opensea</a>) : ("")}
                              </Alert>
                            ) : (
                              ""
                            )}
                            <br />
                            {claimingNFT ? 
                              <div className="cirbox">
                              <div className="cirloader">
                                <svg className="circircular" viewBox="25 25 50 50">
                                  <circle className="cirpath" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
                                </svg>
                              </div>
                            </div>
                              : ""}
                            {/* eslint-disable-next-line */}
                            <div
                              style={{
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                flexDirection: "row",
                                display: "flex",
                              }}
                            >
                              <Button
                                color="info"
                                style={{ padding: "1.5em" }}
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                <RemoveIcon />
                              </Button>
                              <p
                                style={{
                                  textAlign: "center",
                                  color: "primary",
                                  fontSize: "25px",
                                }}
                              >
                                {mintAmount}
                              </p>
                              <Button
                                color="info"
                                style={{ padding: "1.5em" }}
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                <AddIcon />
                              </Button>
                            </div>
                            <br />
                            <div
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                display: "flex",
                              }}
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs(true);
                                  getData();
                                  setFeedback("Approve transaction to mint");
                                  if (visible === false) {
                                    onTrigger();
                                  }
                                }}
                              >
                                {claimingNFT
                                  ? "MINTING..."
                                  : `MINT - ${50 * mintAmount} MATIC`}
                              </Button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Row>
              <Col xl="auto" lg="auto">
                <img
                  style={{ height: "30vh", width: "30vh", marginLeft: "15vh" }}
                  alt={"toxic baebees"}
                  src={require("./pixelated.gif")}
                />
              </Col>
              </Row>
            </Row>
        </Container>
      </div>
      </Suspense>
    </div>
  );
}
