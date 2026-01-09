import styles from "./Skills.module.css";

const Skill = () => {
  return (
    <section className={styles.skillsetSection}>
      <h2 className={styles.heading}>Skillset</h2>

      <p className={styles.description}>
        I always strive to bring together the proper techniques and methods to
        achieve the best possible outcome by working collaboratively.
        Here is the spread of my core skills:
      </p>

      <div className={styles.grid}>
        {/* Column 1 */}
        <div className={styles.column}>
          <h4>FACILITATION</h4>
          <ul>
            <li>Research-to-Release Facilitation</li>
            <li>AI Behavior Review Workshops</li>
            <li>Technical Co-Design (PM + Eng)</li>
            <li>Constraint-driven Discovery</li>
            <li>Model–UX Alignment Rituals</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className={styles.column}>
          <h4>UX DESIGN</h4>
          <ul>
            <li>Quant + Qual Research Ops</li>
            <li>Latency-aware UX Flows</li>
            <li>AI-augmented Prototyping</li>
            <li>Token-aware UX Flows</li>
            <li>Trust-by-Design Systems</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles.column}>
          <h4>UI DESIGN</h4>
          <ul>
            <li>Design APIs & Component Ops</li>
            <li>LLM-based Microcopy</li>
            <li>Confidence-aware UI</li>
            <li>Guardrail Patterns</li>
            <li>Multimodal UI Systems</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles.column}>
          <h4>PRODUCT + AI</h4>
          <ul>
            <li>RAG-based Interface Design</li>
            <li>Prompt Chains with State</li>
            <li>Human-in-the-loop Design</li>
            <li>Fine-tuning Feedback</li>
            <li>Model Evaluation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
