"use client";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Link from "next/link";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import {
  CreateAccount,
  DoNotAccount,
  EmailAddress,
  EnterEmailPasswordLogin,
  FacebookHeading,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
  SignInAccount,
  SignInWith,
  TwitterHeading,
  linkedInHeading,
} from "utils/Constant";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import CommonLogo from "./CommonLogo";
import MyContext from "@/auth/Contex";
import * as yup from "yup";
import { Formik } from "formik";
import { handleHttpError } from "@/components/notifikasi/toastError";
import { decryptData } from "@/auth/Decrypt";
import { jwtDecode } from "jwt-decode";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const {
    setVerified,
    setNmrole,
    setRole,
    setName,
    setActive,
    setKdlokasi,
    setKdkanwil,
    setKdprov,
    setDeptlimit,
    setKdkppn,
    setExpire,
    setToken,
    setIduser,
    setUrl,
    setstatusLogin,
    setUsername,
    setMode,
    setTampil,
    setTampilverify,
    setStatus,
    setPersentase,
    setSession,
    setNamelogin,
    setLoggedInUser2,
    setLoggedinUsers,
    telp,
    setTelp,
    offline,
    setOffline,
    offlinest,
    setOfflinest,
  } = useContext(MyContext);

  const [error, setError] = useState("");
  const [chap, setChap] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleOpenModal = () => setShowOtpModal(true);
  const handleCloseModal = () => setShowOtpModal(false);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    //setChap(value);
  };

  const resetState = () => {
    setName("");
    setRole("");
    setNmrole("");
    setActive("");
    setKdlokasi("");
    setKdkanwil("");
    setVerified("");
    setDeptlimit("");
    setKdkppn("");
    setToken("");
    setExpire("");
    setIduser("");
    setUrl("");
    setstatusLogin(false);
    setUsername("");
    setMode("");
    setTampil("");
    setTampilverify("");
    setStatus("");
    setPersentase([]);
    setCaptcha("");
    setNamelogin(null);
    setLoggedInUser2(null);
    setLoggedinUsers([]);
    setTelp("");
  };

  const schema = yup.object().shape({
    password: yup.string().required("Password Harus Diisi"),
    username: yup.string().required("Username Harus Diisi"),
    captcha: yup.string().when("chap", {
      is: "1",
      then: yup.string().required("Captcha Harus Diisi"),
    }),
  });

  const router = useRouter();
  const getUser = async (values) => {
    if (chap === "1" && recaptchaValue === "") {
      setError("Captcha belum Diverifikasi");
      return false;
    } else if (chap === "0") {
      const cleanedCaptcha = values.captcha.replace(/\s/g, "");
      if (cleanedCaptcha !== captcha.replace(/\s/g, "")) {
        setError("Angka Tidak Sesuai");
        return false;
      }
    } else if (chap === "") {
      setError("Captcha Error");
      return false;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_LOCAL_LOGIN,
        values,
        { withCredentials: true }
      );
      const data = response.data;

      if (!data.success) {
        if (data.msg === "Password Anda Tidak Sesuai") {
          setError("Password Anda Tidak Sesuai");
        } else if (data.msg === "User tidak ditemukan") {
          setError("User tidak ditemukan");
        } else {
          setError("Terjadi kesalahan saat login");
        }
        setLoading(false);
      } else {
        resetState();
        const decrypted = decryptData(data.tokenSetLogin);
        const decoded = jwtDecode(decrypted);
        setTelp(decoded.telp);
        setToken(data.tokenSetLogin);
        setstatusLogin(true);
        setLoading(false);
        setName(decoded.name);
        setExpire(decoded.exp);
        setRole(decoded.role);
        setKdkanwil(decoded.kdkanwil);
        setKdkppn(decoded.kdkppn);
        setKdlokasi(decoded.kdlokasi);
        setActive(decoded.active);
        setDeptlimit(decoded.dept_limit);
        setNmrole(decoded.namarole);
        setIduser(decoded.userId);
        setUrl(decoded.url);
        setUsername(decoded.username);
        setMode(decoded.mode);
        setTampil(decoded.tampil);
        setTampilverify(decoded.tampilverify);
        setSession(decoded.session);
        setVerified(decoded.verified);
        localStorage.setItem("status", "true");

        Cookies.set("token", JSON.stringify(true));

        toast.success("login successful");

        // setOffline(true);
        if (
          decoded.role === "X" ||
          decoded.role === "0" ||
          decoded.role === "1"
        ) {
          // router.push("/v3/landing/profile");
          router.push("/sample-page");
        } else {
          // router.push("/v3/data/form/belanja");
          router.push("/sample-page");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      // console.log(error);
      // console.log(error);
      const { status, data } = error.response || {};
      handleHttpError(
        status,
        (data && data.error) ||
          "Terjadi Permasalahan Koneksi atau Server Backend "
      );

      setError(
        <>
          Terjadi kesalahan saat melakukan permintaan login <br />
          {error.request.statusText ? `(${error.request.statusText})` : ""}
        </>
      );
    }
  };

  const generateCaptcha = () => {
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const captchaString = randomNum.toString();
    const formattedCaptcha = insertRandomSpaces(captchaString);
    setCaptcha(formattedCaptcha);
  };

  const insertRandomSpaces = (input) => {
    const numberOfSpaces = Math.floor(Math.random() * (input.length - 1)) + 1;
    let output = "";
    for (let i = 0; i < input.length; i++) {
      output += input[i];
      if (i < input.length - 1 && i < numberOfSpaces) {
        output += " ";
      }
    }
    return output;
  };

  useEffect(() => {
    if (chap === "0") {
      generateCaptcha();

      const interval = setInterval(() => {
        generateCaptcha();
      }, 20000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [chap]);

  const cekMode = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_LOCAL_CEKMODE
          ? `${process.env.NEXT_PUBLIC_LOCAL_CEKMODE}`
          : ""
      );
      setChap(response.data.capcay);
      // console.log(`${import.meta.env.VITE_REACT_APP_LOCAL_CEKMODE}`);
    } catch (error) {
      console.log(error);

      // error && navigate("/v3/offline");
      setOffline(true);
      setOfflinest(error);
      const { status, data } = error.response || {};
      handleHttpError(status, (data && data.error) || " Mode Offline");
    }
  };
  useEffect(() => {
    cekMode();
  }, []);

  return (
    <Formik
      autoComplete="off"
      validationSchema={schema}
      onSubmit={getUser}
      initialValues={{
        password: "",
        username: "",
        captcha: chap,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Container fluid className="p-0">
          {" "}
          <Row className="m-0">
            <Col xs={12} className="p-0">
              <div className="login-card login-dark">
                <div>
                  <div>
                    <CommonLogo />
                  </div>
                  <div className="login-main">
                    <Form noValidate onSubmit={handleSubmit}>
                      <h4>{SignInAccount}</h4>
                      <p>{EnterEmailPasswordLogin}</p>
                      <Form.Group>
                        <Form.Label>{EmailAddress}</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukkan Username"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isInvalid={touched.username && !!errors.username}
                          className="rounded-left"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>{Password}</Form.Label>
                        <div className="form-input position-relative">
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Masukkan Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={touched.password && !!errors.password}
                            className="rounded-left"
                            style={{ paddingRight: 40 }}
                          />
                          <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            style={{
                              position: "absolute",
                              right: 10,
                              top: "50%",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                              color: "#888",
                              zIndex: 2,
                            }}
                            tabIndex={0}
                            aria-label={
                              showPassword
                                ? "Sembunyikan password"
                                : "Tampilkan password"
                            }
                          >
                            {showPassword ? (
                              <FiEyeOff size={20} />
                            ) : (
                              <FiEye size={20} />
                            )}
                          </span>
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-0">
                        <div className="text-end mt-3">
                          <Button
                            variant="primary"
                            className="w-100"
                            type="submit"
                          >
                            {SignIn}
                          </Button>
                        </div>
                      </Form.Group>{" "}
                      <div className="row">
                        {chap === "0" && (
                          <>
                            <div className="col-md-6 mt-2">
                              <Form.Group className="mb-3 rounded">
                                <Form.Control
                                  type="text"
                                  style={{
                                    height: "45px",
                                  }}
                                  name="captcha"
                                  value={values.captcha}
                                  placeholder="Masukkan Angka "
                                  onChange={handleChange}
                                  isInvalid={
                                    touched.captcha && !!errors.captcha
                                  }
                                />
                              </Form.Group>
                            </div>
                            <div className="col-md-6 mt-2">
                              <Form.Group className="rounded">
                                <Form.Control
                                  value={captcha}
                                  disabled
                                  style={{
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    backgroundColor: "#f2f2f2",
                                  }}
                                />
                              </Form.Group>
                            </div>
                          </>
                        )}
                      </div>
                      <h6 className="text-muted mt-4 or">{SignInWith}</h6>
                      <div className="social mt-4">
                        <div className="btn-showcase d-flex gap-2 flex-wrap">
                          <a
                            className="btn btn-light"
                            href="https://www.linkedin.com/login"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Linkedin className="txt-linkedin" />{" "}
                            {linkedInHeading}
                          </a>
                          <a
                            className="btn btn-light"
                            href="https://twitter.com/login?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Twitter className="txt-twitter" />
                            {TwitterHeading}
                          </a>
                          <a
                            className="btn btn-light"
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Facebook className="txt-fb" />
                            {FacebookHeading}
                          </a>
                        </div>
                      </div>
                      <p className="mt-4 mb-0 text-center">
                        {DoNotAccount}
                        <Link
                          className="ms-2"
                          href="/pages/authentication/register-simple"
                        >
                          {CreateAccount}
                        </Link>
                      </p>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>{" "}
          {error && (
            <Alert variant="danger mt-3">
              <div className="d-grid fade-in text-center text-danger">
                {error}
              </div>
            </Alert>
          )}
        </Container>
      )}
    </Formik>
  );
};

export default Login;
