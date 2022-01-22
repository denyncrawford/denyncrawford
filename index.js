import meta from './metadata.js';
import axios from 'axios';

const { username, name, career, info: { finance, contact: ct, profiles } } = meta;

export const profile = () => {
  return {
    name,
    username,
    career
  }
}

export const support = way => {
  if (!way) return finance;
  return finance[camalize(way)]
}

export const contact = way => {
  if (!way) return ct
  return ct[camalize(way)]
}

export const at = profile => {
  if (!profile) return profiles;
  return profiles[profile] || `Ups! I'm not at ${profile}, try another platform.`
}

export const projects = async name => {
  const { data } = await axios.get(`https://api.github.com/users/denyncrawford/repos`);
  if (!name) return data;
  return data.find(p => p.name == name) || data;
}

const camalize = (str) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
