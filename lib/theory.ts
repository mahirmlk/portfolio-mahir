export type TheoryImplementation = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  topic: string;
  repoUrl: string;
  repository: string;
  stack: string[];
  explanation: string[];
  intuition: string[];
  implementationSteps: {
    title: string;
    detail: string;
  }[];
  results: {
    method: string;
    mse: string;
    r2: string;
    note: string;
  }[];
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  convergence: {
    startLoss: string;
    lossAt100: string;
    finalTrainLoss: string;
    finalTestMse: string;
  };
};

export const theoryImplementations: TheoryImplementation[] = [
  {
    slug: "linear-regression-from-scratch",
    title: "Linear Regression From Scratch",
    subtitle:
      "Turning the normal equation, feature scaling, and gradient descent into a clean NumPy implementation.",
    excerpt:
      "A first-principles rebuild of linear regression with vectorized gradients, closed-form fitting, standardization, and a direct scikit-learn comparison.",
    date: "2026-04-09",
    readTime: "8 min read",
    topic: "ML Foundations",
    repoUrl: "https://github.com/mahirmlk/linear-regression.git",
    repository: "mahirmlk/linear-regression",
    stack: ["NumPy", "scikit-learn", "Matplotlib", "Pandas"],
    explanation: [
      "The repository splits the problem into two parts. The core model lives in `src/linear_regression.py`, where the class implements both batch gradient descent and a closed-form solver. The evaluation layer lives in `src/demo.py`, where synthetic data is generated, all model variants are trained, and the final comparisons are plotted.",
      "The gradient-descent path starts with zero-initialized weights and bias, standardizes the feature matrix, runs a fully vectorized forward pass, computes mean squared error, derives gradients with matrix multiplication, and updates the parameters for 1,500 iterations. After optimization, the learned weights are mapped back into the original feature space so `predict()` works on raw inputs without requiring the caller to re-standardize data by hand.",
      "The closed-form path uses the normal equation on an augmented design matrix with a bias column. That gives an exact solution when `X^T X` is invertible. Keeping both implementations side by side makes the repo useful as a learning artifact: one path shows how optimization behaves iteratively, while the other shows the direct analytical answer.",
    ],
    intuition: [
      "Linear regression looks simple on paper, but it quietly teaches almost every habit that modern ML systems still rely on. You define a model, measure error, compute gradients, and move parameters in the direction that lowers loss. That forward -> loss -> gradient -> update loop is the same structure that later scales into neural nets.",
      "Feature standardization is the most important practical idea in this repo. Without scaling, one feature can dominate the geometry of the loss surface and make gradient descent unstable or painfully slow. Standardizing the input makes the optimization landscape easier to move across, so a reasonable learning rate behaves predictably.",
      "The evaluation result is the real takeaway: the from-scratch optimizer, the closed-form solver, and scikit-learn all land on the same answer. That confirms the math, but it also builds intuition. If three routes converge to the same fit, then the implementation is not just visually plausible, it is numerically aligned with a trusted baseline.",
    ],
    implementationSteps: [
      {
        title: "Standardize the training feature",
        detail:
          "The model computes feature mean and standard deviation, guards against zero variance, and trains in normalized space for stable gradients.",
      },
      {
        title: "Run a vectorized training loop",
        detail:
          "Each iteration computes predictions with `X @ w + b`, logs MSE, derives `dw` and `db` with matrix ops, then updates parameters with a fixed learning rate.",
      },
      {
        title: "Transform weights back to raw space",
        detail:
          "After training, the normalized coefficients are rescaled so inference works directly on original inputs instead of standardized ones.",
      },
      {
        title: "Cross-check against exact and library baselines",
        detail:
          "The repo compares gradient descent against a normal-equation solve and scikit-learn's `LinearRegression` to verify both correctness and parity.",
      },
    ],
    results: [
      {
        method: "Gradient Descent",
        mse: "246.121793",
        r2: "0.968085",
        note: "Matches the library baseline while exposing every optimization step.",
      },
      {
        method: "Closed-Form",
        mse: "246.121793",
        r2: "0.968085",
        note: "Arrives at the same fit analytically through the normal equation.",
      },
      {
        method: "Scikit-Learn",
        mse: "246.121793",
        r2: "0.968085",
        note: "Acts as the reference implementation for parity checking.",
      },
    ],
    metrics: [
      {
        label: "dataset",
        value: "200 samples",
        detail: "Synthetic `make_regression` data with one feature and noise set to 15.0.",
      },
      {
        label: "learned weight",
        value: "86.8180",
        detail: "Recovered close to the true coefficient of `87.7373`.",
      },
      {
        label: "validation fit",
        value: "R² 0.9681",
        detail: "All three implementations converge to the same predictive quality.",
      },
    ],
    convergence: {
      startLoss: "6521.7356",
      lossAt100: "224.5569",
      finalTrainLoss: "224.5569",
      finalTestMse: "246.1218",
    },
  },
];

export function getTheoryImplementation(slug: string) {
  return theoryImplementations.find((item) => item.slug === slug);
}
