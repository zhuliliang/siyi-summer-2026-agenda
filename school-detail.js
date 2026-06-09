(function () {
  const school = window.EAED_BY_SLUG[window.SCHOOL_SLUG] || window.EAED_SCHOOLS[0];
  const peers = school.similar.map((slug) => window.EAED_BY_SLUG[slug]).filter(Boolean);
  document.title = `${school.shortName} EA/ED Profile`;

  const setText = (id, text) => {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
  };

  setText("schoolName", school.name);
  setText("schoolProfile", school.profile);
  setText("environment", school.environment);
  setText("conference", school.conference);
  setText("earlyPlan", school.earlyPlan);
  setText("earlyRate", school.earlyRate);
  setText("soccerIntensity", school.soccerIntensity);
  setText("soccerCulture", school.soccerCulture);
  setText("academicRigor", school.academicRigor);
  setText("roi", school.roi);
  setText("needAid", school.needAid);
  setText("meritAid", school.meritAid);

  document.getElementById("scoreRows").innerHTML = [
    ["Soccer intensity", school.soccerScore],
    ["Academic rigor", school.academicScore],
    ["ROI", school.roiScore],
    ["Need-based aid", school.aidScore]
  ].map(([label, score]) => `
    <div class="score-row">
      <span>${label}</span>
      <div class="mini-bar"><span style="--score:${score}"></span></div>
      <b>${score}/5</b>
    </div>
  `).join("");

  const peerRows = peers.map((peer) => `
    <tr>
      <td><a href="${peer.slug}.html">${peer.shortName}</a></td>
      <td>${peer.environment}</td>
      <td>${peer.conference}</td>
      <td>${peer.soccerIntensity}</td>
      <td>${peer.academicRigor}</td>
      <td>${peer.earlyPlan} ${peer.earlyRate}</td>
    </tr>
  `).join("");
  document.getElementById("peerRows").innerHTML = peerRows;

  document.getElementById("peerCards").innerHTML = peers.map((peer) => `
    <a class="peer-card" href="${peer.slug}.html">
      <span>${peer.conference}</span>
      <strong>${peer.shortName}</strong>
      <small>${peer.environment}; ${peer.earlyPlan} ${peer.earlyRate}</small>
    </a>
  `).join("");
})();
