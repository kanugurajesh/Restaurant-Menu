#!/bin/bash
npm run build
git add *
git commit -m "Automated commit"
git push -u origin main
npm run dev