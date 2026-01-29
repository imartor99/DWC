import React from "react";
import styles from "./CardPost.module.css";

export default function CardPost({ Post }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{Post.title}</h3>
      <p className={styles.body}>{Post.body}</p>
    </div>
  );
}
