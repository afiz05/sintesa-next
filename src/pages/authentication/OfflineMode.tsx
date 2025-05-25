import Head from "next/head";
import { Button } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";

export default function OfflineMode({ error }) {
  return (
    <>
      <Head>
        <title>Offline - Sintesa NEXT</title>
      </Head>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f8f9fa",
        }}
      >
        <h1 style={{ color: "#d32f2f" }}>Sintesa v3 sedang offline</h1>
        <p>Hubungi Administrator</p>
        {/* <p>{error?.message || String(error)}</p> */}
        <Button
          variant="primary"
          onClick={() => window.location.reload()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          <FiRefreshCw size={20} />
          Reload
        </Button>
      </div>
    </>
  );
}
