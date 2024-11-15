import httpService from './http.service';

const API_URL = '/recruitment';

const recruitmentService = {
  // Fonctions pour les candidats
  getAllCandidates() {
    return httpService.get(`${API_URL}/candidates`);
  },

  getCandidateById(id) {
    return httpService.get(`${API_URL}/candidates/${id}`);
  },

  createCandidate(candidateData) {
    return httpService.post(`${API_URL}/candidates`, candidateData);
  },

  updateCandidate(id, candidateData) {
    return httpService.put(`${API_URL}/candidates/${id}`, candidateData);
  },

  deleteCandidate(id) {
    return httpService.delete(`${API_URL}/candidates/${id}`);
  },

  // Fonctions pour les entretiens
  getAllInterviews() {
    return httpService.get(`${API_URL}/interviews`);
  },

  getInterviewById(id) {
    return httpService.get(`${API_URL}/interviews/${id}`);
  },

  createInterview(interviewData) {
    return httpService.post(`${API_URL}/interviews`, interviewData);
  },

  updateInterview(id, interviewData) {
    return httpService.put(`${API_URL}/interviews/${id}`, interviewData);
  },

  deleteInterview(id) {
    return httpService.delete(`${API_URL}/interviews/${id}`);
  },

  // Fonctions pour les offres d'emploi
  getAllJobOffers() {
    return httpService.get(`${API_URL}/job_offers`);
  },

  getJobOfferById(id) {
    return httpService.get(`${API_URL}/job_offers/${id}`);
  },

  createJobOffer(jobOfferData) {
    return httpService.post(`${API_URL}/job_offers`, jobOfferData);
  },

  updateJobOffer(id, jobOfferData) {
    return httpService.put(`${API_URL}/job_offers/${id}`, jobOfferData);
  },

  deleteJobOffer(id) {
    return httpService.delete(`${API_URL}/job_offers/${id}`);
  }
};

export default recruitmentService;